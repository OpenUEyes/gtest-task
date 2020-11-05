class DialogueCharacter {
    static MAINHERO = 'MAINHERO';
    static RUSSELL = 'RUSSELL';

    static loadCharacterEmotion(scene) {
        if (scene.character.toUpperCase() === DialogueCharacter.MAINHERO) {
            if (scene.data.mainhero.bodyType === DialogueBodyType.WHITE) {
                scene.load.image(DialogueCharacter.getEmotionName(scene), `assets/img/mainhero/emotions/1/face_f_1_${scene.emotion}.png`);
            }
            if (scene.data.mainhero.bodyType === DialogueBodyType.BLACK) {
                scene.load.image(DialogueCharacter.getEmotionName(scene), `assets/img/mainhero/emotions/3/face_f_3_${scene.emotion}.png`);
            }
        }
        if (scene.character.toUpperCase() === DialogueCharacter.RUSSELL) {
            scene.load.image(DialogueCharacter.getEmotionName(scene), `assets/img/russell/emotions/face_m_1_${scene.emotion}.png`);
        }
    }

    static getEmotionName(scene) {
        return scene.character + scene.emotion;
    }

    static loadRussell(scene) {
        const hairFrontName = 'hair_m_4.png';
        const hairBackName = 'hair_m_4_back.png';
        const clothesName = 'cloths_m_regular_6.png';
        const bodyName = 'face_m_1_body_m_regular_white_1.png';
        const hairFrontPath = `assets/img/russell/hair/${hairFrontName}`;
        const hairBackPath = `assets/img/russell/hair/${hairBackName}`;
        const clothesPath = `assets/img/russell/${clothesName}`;
        const bodyPath = `assets/img/russell/${bodyName}`;
        scene.load.image(hairFrontName, hairFrontPath);
        scene.load.image(hairBackName, hairBackPath);
        scene.load.image(clothesName, clothesPath);
        scene.load.image(bodyName, bodyPath);

        scene.data.russell= {};
        scene.data.russell.hairFrontName = hairFrontName;
        scene.data.russell.hairBackName = hairBackName;
        scene.data.russell.clothesName = clothesName;
        scene.data.russell.bodyName = bodyName;
    }
}