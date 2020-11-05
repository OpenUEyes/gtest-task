class DialogueLeftScene extends Phaser.Scene {
    constructor(id, emotion, character, text, boxType, type, nextId) {
        super(ControllerScene.getSceneName(id));

        this.id = id;
        this.emotion = emotion;
        this.character = character;
        this.text = text;
        this.boxType = boxType;
        this.type = type;
        this.nextId = nextId;
    }

    init(data) {
        this.data = data;
    }

    preload() {
        this.load.image(this.data.backgroundName, this.data.backgroundPath);

        DialogueCharacter.loadCharacterEmotion(this);

        this.load.image('content-border', 'assets/img/dialogue/middle/content-border.png');
    }

    create() {
        console.log(this.id);
        console.log(this.character);
        console.log(this.emotion);
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);
        bg.setInteractive();
        bg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            ControllerScene.nextSceneById(this.nextId, this);
        });

        let hairBack = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.hairBackName);
        hairBack.setScale(.4);
        let body = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.bodyName);
        body.setScale(.4);
        let clothes = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.clothesName);
        clothes.setScale(.4);
        let emotion = this.add.image(game.config.width / 2, game.config.height / 2, DialogueCharacter.getEmotionName(this));
        emotion.setScale(.4);
        let hairFront = this.add.image(game.config.width / 2, game.config.height / 2, this.data.mainhero.hairFrontName);
        hairFront.setScale(.4);
    }
}