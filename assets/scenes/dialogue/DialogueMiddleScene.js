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
    }

    create() {
        let bg = this.add.image(0, 0, this.data.backgroundName);
        bg.setOrigin(0, 0);
        bg.setInteractive();
        bg.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            ControllerScene.nextSceneById(this.nextId, this);
        });
        let scaleY = this.cameras.main.height / bg.height;
        // bg.scaleX =  this.cameras.main.width / bg.width;
        // bg.scaleY =  this.cameras.main.height / bg.height;
        bg.setScale(scaleY).setScrollFactor(0);
        console.log(bg.width);
        bg.x = -this.cameras.main.height / 3;
        // camera.setPosition(-100, 0);

        // let image = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'map')
        // let scaleX = this.cameras.main.width / bg.width;
        // let scaleY = this.cameras.main.height / bg.height;
        // let scaleY = this.cameras.main.height / bg.height;
        // let scale = Math.max(scaleX, scaleY);
        // bg.setScale(scaleY).setScrollFactor(0);

        let contentBackground = this.add.image(game.config.width / 2, game.config.height / 2 + 150, 'content-background');
        contentBackground.setScale(1.05);
        this.add.image(game.config.width / 2, game.config.height / 2 + 150, 'content-border');

        const textStyle = {fill: '#000', wordWrap: {width: contentBackground.width - 10, useAdvanceWrap: true}};
        this.add.text(game.config.width / 2 - contentBackground.width / 2 + 10, game.config.height / 2 + 115, this.text, textStyle);
    }

    update() {
    }
}