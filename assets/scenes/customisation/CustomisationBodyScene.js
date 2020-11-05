class CustomisationBodyScene extends Phaser.Scene {
    constructor() {
        super('CustomisationBodyScene');

        this.bodyIndex = 1;
    }

    preload() {
        this.load.image('body1', 'assets/start/body/1/face_f_1_body_f_regular_white_1.png');
        this.load.image('body2', 'assets/start/body/3/face_f_3_body_f_regular_latino_3.png');
        // this.load.image('clothes1', 'assets/start/clothes/cloths_f_regular_8.png');
        // this.load.image('clothes2', 'assets/start/clothes/cloths_f_regular_9.png');
        // this.load.image('hairFront1', 'assets/start/hair/front/hair_f_3.png');
        // this.load.image('hairFront2', 'assets/start/hair/front/hair_f_4.png');
        // this.load.image('hairBack1', 'assets/start/hair/back/hair_f_3_back.png');
        // this.load.image('hairBack2', 'assets/start/hair/back/hair_f_4_back.png');
        this.load.image('background', 'assets/img/backgrounds/background.png');
        this.load.image('button', 'assets/button.png');
        this.load.image('vectorRight', 'assets/vector-right.png');
        this.load.image('vectorLeft', 'assets/vector-left.png');
    }

    create() {
        let bg = this.add.image(0, 0, 'background');
        bg.setOrigin(0, 0);

        // let hairBack = this.add.image(game.config.width / 2, game.config.height / 2, 'hairBack1');
        // hairBack.setScale(.4);
        let body = this.add.image(game.config.width / 2, game.config.height / 2, 'body1');
        body.setScale(.4);
        // let clothes = this.add.image(game.config.width / 2, game.config.height / 2, 'clothes1');
        // clothes.setScale(.4);
        // let hairFront = this.add.image(game.config.width / 2, game.config.height / 2, 'hairFront1');
        // hairFront.setScale(.4);
        let form = this.add.text(80, game.config.height - 130, 'Select your body');
        form.setScale(1.5);

        let button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    this.scene.start('CustomisationHairScene', {
                        body: this.bodyIndex
                    })
                }
            );
        button.setScale(.8);
        let text = this.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');

        this.add.image(40, game.config.height / 2, 'vectorLeft')
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    body.destroy();
                    body = this.add.image(game.config.width / 2, game.config.height / 2, 'body1');
                    body.setScale(.4);
                    this.bodyIndex = 1;

                    form.destroy();
                    form = this.add.text(80, game.config.height - 150, 'Select your body');
                    form.setScale(1.5);

                    button.destroy();
                    button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
                        .setInteractive()
                        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                                this.scene.start('CustomisationHairScene', {
                                    body: this.bodyIndex
                                })
                            }
                        );
                    button.setScale(.8);
                    text.destroy();
                    text = this.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');
                }
            );
        this.add.image(game.config.width - 40, game.config.height / 2, 'vectorRight')
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    body.destroy();
                    body = this.add.image(game.config.width / 2, game.config.height / 2, 'body2');
                    body.setScale(.4);
                    this.bodyIndex = 2;

                    form.destroy();
                    form = this.add.text(80, game.config.height - 150, 'Select your body');
                    form.setScale(1.5);

                    button.destroy();
                    button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
                        .setInteractive()
                        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                                this.scene.start('CustomisationHairScene', {
                                    body: this.bodyIndex
                                })
                            }
                        );
                    button.setScale(.8);
                text.destroy();
                text = this.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');
                }
            );
    }
}