class DialogueCharacter {
    static MAINHERO = 'MAINHERO';
    static RUSSELL = 'RUSSELL';

    static loadCharacterEmotion(scene) {
        // if (scene.character.toUpperCase() === Character.MAINHERO) {
        //     scene.load.image(scene.emotion, `assets/img/mainhero/emotions/${scene.emotion}.png`);
        // }
        if (scene.character.toUpperCase() === DialogueCharacter.RUSSELL) {
            scene.load.image(scene.emotion, `assets/img/russell/emotions/face_m_1_${scene.emotion}.png`);
        }
    }
}