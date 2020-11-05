class RightScene extends Phaser.Scene {
    constructor(id, emotion, character, text, type, nextId) {
        super(ControllerScene.getSceneName(id));

        this.id = id;
        this.emotion = emotion;
        this.character = character;
        this.text = text;
        this.type = type;
        this.nextId = nextId;
    }

    init(data) {
        this.data = data;
    }

    preload() {
        this.load.image(this.data.backgroundName, this.data.backgroundPath);

        Character.loadCharacterEmotion(this);

        console.log(this);

        console.log(this.id + 'before');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);
        bg.setInteractive();
        bg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            ControllerScene.nextScene(this.nextId, this);
        });

        let temp = this.add.image(game.config.width / 2, game.config.height / 2, this.emotion);
        temp.setScale(.5);
        console.log(temp);
        console.log(this.id + 'after');
    }
}