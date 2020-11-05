class CustomisationClothesScene extends Phaser.Scene {

    constructor() {
        super('CustomisationClothesScene');

        this.init = function (data) {
            this.bodyIndex = data.body;
            this.hairFrontIndex = data.hairFrontIndex;
            this.hairBackIndex = data.hairBackIndex;
            this.clothesIndex = 1;
        }
    }

    preload() {
        this.load.image('body1', 'assets/start/body/1/face_f_1_body_f_regular_white_1.png');
        this.load.image('body2', 'assets/start/body/3/face_f_3_body_f_regular_latino_3.png');
        this.load.image('clothes1', 'assets/start/clothes/cloths_f_regular_8.png');
        this.load.image('clothes2', 'assets/start/clothes/cloths_f_regular_9.png');
        this.load.image('hairFront1', 'assets/start/hair/front/hair_f_3.png');
        this.load.image('hairFront2', 'assets/start/hair/front/hair_f_4.png');
        this.load.image('hairBack1', 'assets/start/hair/back/hair_f_3_back.png');
        this.load.image('hairBack2', 'assets/start/hair/back/hair_f_4_back.png');
        this.load.image('background', 'assets/img/backgrounds/background.png');
        this.load.image('button', 'assets/button.png');
        this.load.image('vectorRight', 'assets/vector-right.png');
        this.load.image('vectorLeft', 'assets/vector-left.png');
    }

    create() {
        let bg = this.add.image(0, 0, 'background');
        bg.setOrigin(0, 0);

        let hairBack = this.add.image(game.config.width / 2, game.config.height / 2, 'hairBack' + this.hairBackIndex);
        hairBack.setScale(.4);
        let body = this.add.image(game.config.width / 2, game.config.height / 2, 'body' + this.bodyIndex);
        body.setScale(.4);
        let clothes = this.add.image(game.config.width / 2, game.config.height / 2, 'clothes1');
        clothes.setScale(.4);
        let hairFront = this.add.image(game.config.width / 2, game.config.height / 2, 'hairFront' + this.hairFrontIndex);
        hairFront.setScale(.4);
        let form = this.add.text(80, game.config.height - 150, 'Select your clothes');
        form.setScale(1.5);
        let button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    this.scene.start('CustomisationEndScene', {
                        body: this.bodyIndex,
                        hairFrontIndex: this.hairFrontIndex,
                        hairBackIndex: this.hairBackIndex,
                        clothesIndex: this.clothesIndex
                    })
                }
            );
        button.setScale(.8);
        let text = this.add.text(game.config.width / 2 - 30, game.config.height - 60, 'Confirm');

        this.add.image(40, game.config.height / 2, 'vectorLeft')
            .setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                    hairBack.destroy();
                    hairBack = this.add.image(game.config.width / 2, game.config.height / 2, 'hairBack' + this.hairBackIndex);
                    hairBack.setScale(.4);

                    body.destroy();
                    body = this.add.image(game.config.width / 2, game.config.height / 2, 'body' + this.bodyIndex);
                    body.setScale(.4);

                    clothes.destroy();
                    clothes = this.add.image(game.config.width / 2, game.config.height / 2, 'clothes1');
                    clothes.setScale(.4);
                    this.clothesIndex = 1;

                    hairFront.destroy();
                    hairFront = this.add.image(game.config.width / 2, game.config.height / 2, 'hairFront' + this.hairFrontIndex);
                    hairFront.setScale(.4);

                    form.destroy();
                    form = this.add.text(80, game.config.height - 150, 'Select your clothes');
                    form.setScale(1.5);

                    button.destroy();
                    button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
                        .setInteractive()
                        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                                this.scene.start('CustomisationEndScene', {
                                    body: this.bodyIndex,
                                    hairFrontIndex: this.hairFrontIndex,
                                    hairBackIndex: this.hairBackIndex,
                                    clothesIndex: this.clothesIndex
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
                    hairBack.destroy();
                    hairBack = this.add.image(game.config.width / 2, game.config.height / 2, 'hairBack' + this.hairBackIndex);
                    hairBack.setScale(.4);

                    body.destroy();
                    body = this.add.image(game.config.width / 2, game.config.height / 2, 'body' + this.bodyIndex);
                    body.setScale(.4);

                    clothes.destroy();
                    clothes = this.add.image(game.config.width / 2, game.config.height / 2, 'clothes2');
                    clothes.setScale(.4);
                    this.clothesIndex = 2;

                    hairFront.destroy();
                    hairFront = this.add.image(game.config.width / 2, game.config.height / 2, 'hairFront' + this.hairFrontIndex);
                    hairFront.setScale(.4);

                    form.destroy();
                    form = this.add.text(80, game.config.height - 150, 'Select your clothes');
                    form.setScale(1.5);

                    button.destroy();
                    button = this.add.image(game.config.width / 2, game.config.height - 50, 'button')
                        .setInteractive()
                        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                                this.scene.start('CustomisationEndScene', {
                                    body: this.bodyIndex,
                                    hairFrontIndex: this.hairFrontIndex,
                                    hairBackIndex: this.hairBackIndex,
                                    clothesIndex: this.clothesIndex
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