class DialogueMiddleScene extends Phaser.Scene {
    constructor(id, text, nextId) {
        super(ControllerScene.getSceneName(id));

        this.id = id;
        this.text = text;
        this.nextId = nextId;
    }

    init(data) {
        this.data = data;
    }

    preload() {
        this.load.image(this.data.backgroundName, this.data.backgroundPath);
        this.load.image('content-background', 'assets/img/dialogue/middle/content-background.png');
        this.load.image('content-border', 'assets/img/dialogue/middle/content-border.png');
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);
        bg.setInteractive();
        bg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            ControllerScene.nextSceneById(this.nextId, this);
        });

        let contentBackground = this.add.image(game.config.width / 2, game.config.height / 2 + 150, 'content-background');
        contentBackground.setScale(1.05);
        this.add.image(game.config.width / 2, game.config.height / 2 + 150, 'content-border');

        // TODO text wrap
        const textStyle = {fill:'#000'};
        let textFirst = this.text.substr(0, 40);
        let textSecond = this.text.substr(40);
        this.add.text(game.config.width / 2 - 150, game.config.height / 2 + 125, textFirst, textStyle);
        this.add.text(game.config.width / 2 - 150, game.config.height / 2 + 175, textSecond, textStyle);
    }
}