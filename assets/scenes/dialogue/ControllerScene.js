class ControllerScene extends Phaser.Scene {
    constructor() {
        super('ControllerScene');
    }

    preload() {
        this.load.json('dialogue', 'assets/ons2.json');
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
                case Type.BACKGROUND :
                    this.game.scene.add(currentEpisode.sceneName,
                        new BackgroundScene(currentEpisode.id, currentEpisode.backgroundName, currentEpisode.nextId));
                    break;
                case Type.MIDDLE :
                    this.game.scene.add(currentEpisode.sceneName,
                        new MiddleScene(currentEpisode.id, currentEpisode.text, currentEpisode.nextId));
                    break;
                case Type.LEFT :
                    this.game.scene.add(currentEpisode.sceneName,
                        new LeftScene(
                            currentEpisode.id,
                            currentEpisode.emotion,
                            currentEpisode.character,
                            currentEpisode.text,
                            currentEpisode.boxType,
                            currentEpisode.type,
                            currentEpisode.nextId)
                    );
                    break;
                case Type.RIGHT :
                    this.game.scene.add(currentEpisode.sceneName,
                        new RightScene(
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

        // TODO initialize data (from json)
        this.data = {};
        const startSceneId = episodes[0].id;
        ControllerScene.nextScene(startSceneId, this)
    }

    // go to default scene if it's the last scene or continue to next scene
    static nextScene(nextId, currentScene) {
        if (nextId === -1) {
            currentScene.scene.start('CustomisationBodyScene', currentScene.data);
        } else {
            currentScene.scene.start(ControllerScene.getSceneName(nextId), currentScene.data);
        }
    }

    static getSceneName(id) {
        return `scene${id}`;
    }
}