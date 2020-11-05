class LeftScene extends Phaser.Scene {
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

        Character.loadCharacterEmotion(this);

        this.load.image('content-border', 'assets/img/dialogue/middle/content-border.png');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);
        bg.setInteractive();
        bg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            ControllerScene.nextScene(this.nextId, this);
        });

        // this.add.image(100, 100, this.emotion);
    }
}