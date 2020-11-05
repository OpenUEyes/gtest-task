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

        let body = this.add.image(game.config.width / 2, game.config.height / 2, this.bodyName);
        body.setScale(.4);
        let form = this.add.text(80, game.config.height - 130, 'Select your body');
        form.setScale(1.5);

        let button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    this.data.mainhero.bodyName = this.bodyName;
                    this.data.mainhero.bodyPath = this.bodyPath;
                    ControllerScene.nextSceneByName(this.nextSceneName, this);
                }
            );
        button.setScale(.8);
        let text = this.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');

        // rebuild scene elements
        function executeButton(scene, bodyName, bodyPath) {
            body.destroy();
            body = scene.add.image(game.config.width / 2, game.config.height / 2, bodyName);
            body.setScale(.4);

            form.destroy();
            form = scene.add.text(80, game.config.height - 150, 'Select your body');
            form.setScale(1.5);

            button.destroy();
            button = scene.add.image(game.config.width / 2, game.config.height - 50, 'button')
                .setInteractive()
                .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                        scene.data.mainhero.bodyName = bodyName;
                        scene.data.mainhero.bodyPath = bodyPath;
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
                    executeButton(this, this.bodyName, this.bodyPath);
                }
            );
        this.add.image(game.config.width - 40, game.config.height / 2, this.data.vectorRightName)
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    // update bodyName
                    executeButton(this, 'body2', 'assets/img/customisation/body/3/face_f_3_body_f_regular_latino_3.png');
                }
            );
    }
}