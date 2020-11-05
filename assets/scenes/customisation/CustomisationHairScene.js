class CustomisationHairScene extends Phaser.Scene {

    constructor(nextSceneName) {
        super('CustomisationHairScene');

        this.hairFrontName = 'hairFront1';
        this.hairFrontPath = 'assets/img/customisation/hair/front/hair_f_3.png';
        this.hairBackName = 'hairBack1';
        this.hairBackPath = 'assets/img/customisation/hair/back/hair_f_3_back.png';
        this.nextSceneName = nextSceneName;
    }

    init(data) {
        this.data = data;
    }

    preload() {
        this.load.image(this.data.mainhero.bodyName, this.data.mainhero.bodyPath);

        this.load.image(this.hairFrontName, this.hairFrontPath);
        this.load.image('hairFront2', 'assets/img/customisation/hair/front/hair_f_4.png');
        this.load.image(this.hairBackName, this.hairBackPath);
        this.load.image('hairBack2', 'assets/img/customisation/hair/back/hair_f_4_back.png');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);

        let hairBack, body, hairFront, form, button, text;

        addImages(this,
            this.hairFrontName, this.hairFrontPath,
            this.hairBackName, this.hairBackPath, false);

        function addImages(scene, hairFrontName, hairFrontPath, hairBackName, hairBackPath, rebuild) {
            if (rebuild) {
                hairBack.destroy();
                body.destroy();
                hairFront.destroy();
                form.destroy();
                button.destroy();
                text.destroy();
            }

            hairBack = scene.add.image(game.config.width / 2, game.config.height / 2, hairBackName);
            hairBack.setScale(.4);

            body = scene.add.image(game.config.width / 2, game.config.height / 2, scene.data.mainhero.bodyName);
            body.setScale(.4);

            hairFront = scene.add.image(game.config.width / 2, game.config.height / 2, hairFrontName);
            hairFront.setScale(.4);

            form = scene.add.text(80, game.config.height - 130, 'Select your hair');
            form.setScale(1.5);

            button = scene.add.image(game.config.width / 2, game.config.height - 50, 'button')
                .setInteractive()
                .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                        scene.data.mainhero.hairFrontName = hairFrontName;
                        scene.data.mainhero.hairFrontPath = hairFrontPath;
                        scene.data.mainhero.hairBackName = hairBackName;
                        scene.data.mainhero.hairBackPath = hairBackPath;
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
                    addImages(this,
                        this.hairFrontName, this.hairFrontPath,
                        this.hairBackName, this.hairBackPath, true);
                }
            );
        this.add.image(game.config.width - 40, game.config.height / 2, this.data.vectorRightName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    addImages(this,
                        'hairFront2', 'assets/img/customisation/hair/front/hair_f_4.png',
                        'hairBack2', 'assets/img/customisation/hair/back/hair_f_4_back.png', true);
                }
            );
    }
}