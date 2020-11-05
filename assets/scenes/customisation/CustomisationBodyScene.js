class CustomisationBodyScene extends Phaser.Scene {
    constructor(nextSceneName) {
        super('CustomisationBodyScene');

        this.bodyName = 'body1';
        this.bodyPath = 'assets/img/customisation/body/1/face_f_1_body_f_regular_white_1.png';
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

        // load default
        this.load.image(this.bodyName, this.bodyPath);
        // load another for choice
        this.load.image('body2', 'assets/img/customisation/body/3/face_f_3_body_f_regular_latino_3.png');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);

        let body, form, button, text;

        function addImages(scene, bodyName, bodyPath, rebuild) {
            if (rebuild) {
                body.destroy();
                form.destroy();
                button.destroy();
                text.destroy();
            }

            body = scene.add.image(game.config.width / 2, game.config.height / 2, bodyName);
            body.setScale(.4);
            form = scene.add.text(80, game.config.height - 130, 'Select your body');
            form.setScale(1.5);

            button = scene.add.image(game.config.width / 2, game.config.height - 50, 'button')
                .setInteractive()
                .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                        scene.data.mainhero.bodyName = bodyName;
                        scene.data.mainhero.bodyPath = bodyPath;
                        ControllerScene.nextSceneByName(scene.nextSceneName, scene);
                    }
                );
            button.setScale(.8);
            text = scene.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');
        }

        addImages(this, this.bodyName, this.bodyPath, false);

        this.add.image(40, game.config.height / 2, this.data.vectorLeftName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    addImages(this, this.bodyName, this.bodyPath, true);
                }
            );
        this.add.image(game.config.width - 40, game.config.height / 2, this.data.vectorRightName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    addImages(this, 'body2', 'assets/img/customisation/body/3/face_f_3_body_f_regular_latino_3.png', true);
                }
            );
    }
}