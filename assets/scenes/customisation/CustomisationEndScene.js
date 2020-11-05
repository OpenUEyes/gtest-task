class CustomisationEndScene extends Phaser.Scene {

    constructor() {
        super('CustomisationEndScene');

        // this.init = function (data) {
        //     this.bodyIndex = data.body;
        //     this.hairFrontIndex = data.hairFrontIndex;
        //     this.hairBackIndex = data.hairBackIndex;
        //     this.clothesIndex = data.clothesIndex;
        // }
    }

    init(data){
        this.bodyIndex = data.body;
        this.hairFrontIndex = data.hairFrontIndex;
        this.hairBackIndex = data.hairBackIndex;
        this.clothesIndex = data.clothesIndex;
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
        this.load.image('chosen', 'assets/chosen.png')
    }

    create() {
        let bg = this.add.image(0, 0, 'background');
        bg.setOrigin(0, 0);
        bg.setInteractive();
        bg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.start('ControllerScene')
        });

        let chosen = this.add.image(game.config.width / 2, 20, 'chosen');
        chosen.setScale(.9);
        this.add.text(game.config.width / 2 - 50, 10, 'ITEM CHOSEN');

        let hairBack = this.add.image(game.config.width / 2, game.config.height / 2, 'hairBack' + this.hairBackIndex);
        hairBack.setScale(.4);
        let body = this.add.image(game.config.width / 2, game.config.height / 2, 'body' + this.bodyIndex);
        body.setScale(.4);
        let clothes = this.add.image(game.config.width / 2, game.config.height / 2, 'clothes' + this.clothesIndex);
        clothes.setScale(.4);
        let hairFront = this.add.image(game.config.width / 2, game.config.height / 2, 'hairFront' + this.hairFrontIndex);
        hairFront.setScale(.4);

    }
}