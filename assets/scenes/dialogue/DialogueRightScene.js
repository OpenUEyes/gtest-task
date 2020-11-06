class DialogueRightScene extends Phaser.Scene {
    constructor(id, emotion, character, text, type, nextId) {
        super(ControllerScene.getSceneName(id));

        this.id = id;
        this.emotion = emotion;
        this.character = character;
        this.text = text;
        this.type = type;
        this.nextId = nextId;
        console.log('right init ' + id);
    }

    init(data) {
        this.data = data;
    }

    preload() {
        this.load.image(this.data.backgroundName, this.data.backgroundPath);

        DialogueCharacter.loadCharacterEmotion(this);
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);
        bg.setInteractive();
        bg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            ControllerScene.nextSceneById(this.nextId, this);
        });
        let scaleY = this.cameras.main.height / bg.height;
        bg.setScale(scaleY).setScrollFactor(0);
        bg.x = -this.cameras.main.height / 2;

        const characterOffset = 50;
        let hairBack = this.add.image(game.config.width / 2 + characterOffset, game.config.height / 2, this.data.russell.hairBackName);
        hairBack.setScale(.4);
        hairBack.flipX = true;
        let body = this.add.image(game.config.width / 2 + characterOffset, game.config.height / 2, this.data.russell.bodyName);
        body.setScale(.4);
        body.flipX = true;
        let clothes = this.add.image(game.config.width / 2 + characterOffset, game.config.height / 2, this.data.russell.clothesName);
        clothes.setScale(.4);
        clothes.flipX = true;
        let emotion = this.add.image(game.config.width / 2 + characterOffset, game.config.height / 2, DialogueCharacter.getEmotionName(this));
        emotion.setScale(.4);
        emotion.flipX = true;
        let hairFront = this.add.image(game.config.width / 2 + characterOffset, game.config.height / 2, this.data.russell.hairFrontName);
        hairFront.setScale(.4);
        hairFront.flipX = true;

        let contentBackground = this.add.image(game.config.width / 2, game.config.height / 2 + 150, 'content-background');
        contentBackground.setScale(1.05);
        this.add.image(game.config.width / 2, game.config.height / 2 + 150, 'content-border');

        const textStyle = {fill: '#000', wordWrap: {width: contentBackground.width - 10, useAdvanceWrap: true}};
        this.add.text(game.config.width / 2 - contentBackground.width / 2 + 10, game.config.height / 2 + 115, this.text, textStyle);
    }
}