class DialogueControllerScene extends Phaser.Scene {
    constructor() {
        super('DialogueControllerScene');
    }

    init(data) {
        this.data = data;
    }

    preload() {
        this.load.json('dialogue', 'assets/ons2.json');

        DialogueCharacter.loadRussell(this);

        this.load.image('content-background', 'assets/img/dialogue/middle/content-background.png');
        this.load.image('content-border', 'assets/img/dialogue/middle/content-border.png');
    }

    create() {
        const episodes = this.cache.json.get('dialogue');

        // create scenes
        for (let i = 0; i < episodes.length; i++) {
            let currentEpisode = episodes[i];
            currentEpisode.sceneName = ControllerScene.getSceneName(currentEpisode.id);
            // change nextId of last element
            if (episodes.length - 1 === i) {
                currentEpisode.nextId = -1;
            }

            switch (currentEpisode.type.toUpperCase()) {
                case DialogueType.BACKGROUND :
                    this.game.scene.add(currentEpisode.sceneName,
                        new DialogueBackgroundScene(currentEpisode.id, currentEpisode.backgroundName, currentEpisode.nextId));
                    break;
                case DialogueType.MIDDLE :
                    this.game.scene.add(currentEpisode.sceneName,
                        new DialogueMiddleScene(currentEpisode.id, currentEpisode.text, currentEpisode.nextId));
                    break;
                case DialogueType.LEFT :
                    this.game.scene.add(currentEpisode.sceneName,
                        new DialogueLeftScene(
                            currentEpisode.id,
                            currentEpisode.emotion,
                            currentEpisode.character,
                            currentEpisode.text,
                            currentEpisode.boxType,
                            currentEpisode.type,
                            currentEpisode.nextId)
                    );
                    break;
                case DialogueType.RIGHT :
                    this.game.scene.add(currentEpisode.sceneName,
                        new DialogueRightScene(
                            currentEpisode.id,
                            currentEpisode.emotion,
                            currentEpisode.character,
                            currentEpisode.text,
                            currentEpisode.type,
                            currentEpisode.nextId)
                    );
                    break;
            }
        }

        const startSceneId = episodes[0].id;
        ControllerScene.nextSceneById(startSceneId, this)
    }
}