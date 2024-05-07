export class Letter {

    letter : string;
    capitalLetter : string;
    smallLetter : string;
    letterImgPath : string;
    letterSoundPath : string;
    imgPath : string;

    constructor(
        letter : string,
        capitalLetter : string,
        smallLetter : string,
        letterImgPath : string,
        letterSoundPath : string,
        imgPath : string,
    ){
        this.letter = letter;
        this.capitalLetter = capitalLetter;
        this.smallLetter = smallLetter;
        this.letterImgPath = letterImgPath;
        this.letterSoundPath = letterSoundPath;
        this.imgPath = imgPath;
    }
}
