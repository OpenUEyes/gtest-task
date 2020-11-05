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
        this.load.image(this.data.backgroundName, this.data.backgroundPath);
        this.load.image(this.data.buttonName, this.data.buttonPath);
        this.load.image(this.data.vectorRightName, this.data.vectorRightPath);
        this.load.image(this.data.vectorLeftName, this.data.vectorLeftPath);

        this.load.image(this.data.mainhero.bodyName, this.data.mainhero.bodyPath);

        this.load.image(this.hairFrontName, this.hairFrontPath);
        this.load.image('hairFront2', 'assets/img/customisation/hair/front/hair_f_4.png');
        this.load.image(this.hairBackName, this.hairBackPath);
        this.load.image('hairBack2', 'assets/img/customisation/hair/back/hair_f_4_back.png');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);

        let hairBack = this.add.image(game.config.width / 2, game.config.height / 2, this.hairBackName);
        hairBack.setScale(.4);

        let body = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.bodyName);
        body.setScale(.4);

        let hairFront = this.add.image(game.config.width / 2, game.config.height / 2, this.hairFrontName);
        hairFront.setScale(.4);

        let form = this.add.text(80, game.config.height - 130, 'Select your hair');
        form.setScale(1.5);

        let button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    this.data.mainhero.hairFrontName = this.hairFrontName;
                    this.data.mainhero.hairFrontPath = this.hairFrontPath;
                    this.data.mainhero.hairBackName = this.hairBackName;
                    this.data.mainhero.hairBackPath = this.hairBackPath;
                    ControllerScene.nextSceneByName(this.nextSceneName, this);
                }
            );
        button.setScale(.8);
        let text = this.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');

        function executeButton(scene, hairFrontName, hairFrontPath, hairBackName, hairBackPath) {
            hairBack.destroy();
            hairBack = scene.add.image(game.config.width / 2, game.config.height / 2, hairBackName);
            hairBack.setScale(.4);

            body.destroy();
            body = scene.add.image(game.config.width / 2, game.config.height / 2, scene.data.mainhero.bodyName);
            body.setScale(.4);

            hairFront.destroy();
            hairFront = scene.add.image(game.config.width / 2, game.config.height / 2, hairFrontName);
            hairFront.setScale(.4);

            form.destroy();
            form = scene.add.text(80, game.config.height - 130, 'Select your hair');
            form.setScale(1.5);

            button.destroy();
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

            text.destroy();
            text = scene.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');
        }

        this.add.image(40, game.config.height / 2, this.data.vectorLeftName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    // default
                    executeButton(this,
                        this.hairFrontName, this.hairFrontPath,
                        this.hairBackName, this.hairBackPath);
                }
            );
        this.add.image(game.config.width - 40, game.config.height / 2, this.data.vectorRightName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    executeButton(this,
                        'hairFront2', 'assets/img/customisation/hair/front/hair_f_4.png',
                        'hairBack2', 'assets/img/customisation/hair/back/hair_f_4_back.png');
                }
            );
    }
}