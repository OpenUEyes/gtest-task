class SideScene extends Phaser.Scene {
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

        if (this.character.toUpperCase() === Character.MAINHERO) {
            this.load.image(this.emotion, `assets/img/mainhero/emotions/${this.emotion}.png`);
        }
        if (this.character.toUpperCase() === Character.RUSSELL) {
            this.load.image(this.emotion, `assets/img/russell/emotions/${this.emotion}.png`);
        }


        this.load.image('content-border', 'assets/img/dialogue/middle/content-border.png');
    }

    create() {
    }
}