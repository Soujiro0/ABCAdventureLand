import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-one-play',
  templateUrl: './lesson-one-play.page.html',
  styleUrls: ['./lesson-one-play.page.scss'],
})
export class LessonOnePlayPage implements OnInit {
  consonants: any[] = [
    { letter: 'B', objectName: 'Ball', pronunciation: 'ball', letterImgPath: 'assets/images/consonants/B.png' },
    { letter: 'C', objectName: 'Cat', pronunciation: 'cat', letterImgPath: 'assets/images/consonants/C.png' },
    { letter: 'D', objectName: 'Dog', pronunciation: 'dog', letterImgPath: 'assets/images/consonants/D.png' },
    { letter: 'F', objectName: 'Fish', pronunciation: 'fih-ish', letterImgPath: 'assets/images/consonants/F.png' },
    { letter: 'G', objectName: 'Guitar', pronunciation: 'gih-tar', letterImgPath: 'assets/images/consonants/G.png' },
    { letter: 'H', objectName: 'Hat', pronunciation: 'huh-t', letterImgPath: 'assets/images/consonants/H.png' },
    { letter: 'J', objectName: 'Jellyfish', pronunciation: 'jel-ee-fish', letterImgPath: 'assets/images/consonants/J.png' },
    { letter: 'K', objectName: 'Kite', pronunciation: 'kite', letterImgPath: 'assets/images/consonants/K.png' },
    { letter: 'L', objectName: 'Lamp', pronunciation: 'lamp', letterImgPath: 'assets/images/consonants/L.png' },
    { letter: 'M', objectName: 'Mouse', pronunciation: 'maws', letterImgPath: 'assets/images/consonants/M.png' },
    { letter: 'N', objectName: 'Nest', pronunciation: 'nest', letterImgPath: 'assets/images/consonants/N.png' },
    { letter: 'P', objectName: 'Piano', pronunciation: 'pee-an-oh', letterImgPath: 'assets/images/consonants/P.png' },
    { letter: 'Q', objectName: 'Queen', pronunciation: 'kween', letterImgPath: 'assets/images/consonants/Q.png' },
    { letter: 'R', objectName: 'Rainbow', pronunciation: 'rain-bohw', letterImgPath: 'assets/images/consonants/R.png' },
    { letter: 'S', objectName: 'Sun', pronunciation: 'sun', letterImgPath: 'assets/images/consonants/S.png' },
    { letter: 'T', objectName: 'Tiger', pronunciation: 'ty-ger', letterImgPath: 'assets/images/consonants/T.png' },
    { letter: 'V', objectName: 'Violin', pronunciation: 'vy-oh-lin', letterImgPath: 'assets/images/consonants/V.png' },
    { letter: 'W', objectName: 'Watch', pronunciation: 'wach', letterImgPath: 'assets/images/consonants/W.png' },
    { letter: 'X', objectName: 'Xylophone', pronunciation: 'zy-loh-fown', letterImgPath: 'assets/images/consonants/X.png' },
    { letter: 'Y', objectName: 'Yo-yo', pronunciation: 'yoyo', letterImgPath: 'assets/images/consonants/Y.png' },
    { letter: 'Z', objectName: 'Zipper', pronunciation: 'zip-per', letterImgPath: 'assets/images/consonants/Z.png' }
  ];
  vowels: any[] = [
    { letter: 'A', objectName: 'Apple', pronunciation: 'uh-pohl', letterImgPath: 'assets/images/vowels/A.png' },
    { letter: 'E', objectName: 'Egg', pronunciation: 'eg', letterImgPath: 'assets/images/vowels/E.png' },
    { letter: 'I', objectName: 'Igloo', pronunciation: 'ih-gloo', letterImgPath: 'assets/images/vowels/I.png' },
    { letter: 'O', objectName: 'Orange', pronunciation: 'or-enj', letterImgPath: 'assets/images/vowels/O.png' },
    { letter: 'U', objectName: 'Umbrella', pronunciation: 'um-brell-uh', letterImgPath: 'assets/images/vowels/U.png' }
  ];
  selectedLetter: any;
  letterType: string = 'consonants';
  audio: HTMLAudioElement = new Audio();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const letter = params.get('letter')!;
      this.letterType = params.get('type') || 'consonants';
      this.selectedLetter = this.getLetter(letter, this.letterType);
      this.loadAudio();
    });
  }

  getLetter(letter: string, type: string): any {
    return type === 'vowels' ? this.vowels.find(l => l.letter === letter) : this.consonants.find(l => l.letter === letter);
  }

  getPronunciationParts(pronunciation: string | undefined): string[] {
    return pronunciation ? pronunciation.split('-') : [];
  }

  loadAudio() {
    this.updateAudioSource();
  }

  updateAudioSource() {
    this.audio.src = `../../../../assets/text-to-speech/${this.selectedLetter?.letter}.mp3`;
    this.audio.load();
  }

  playAudio() {
    this.audio.play();
  }

  nextLetter() {
    const letters = this.letterType === 'vowels' ? this.vowels : this.consonants;
    const currentIndex = letters.findIndex(l => l.letter === this.selectedLetter.letter);
    const nextIndex = (currentIndex + 1) % letters.length;
    this.selectedLetter = letters[nextIndex];
    this.updateAudioSource();
  }

  previousLetter() {
    const letters = this.letterType === 'vowels' ? this.vowels : this.consonants;
    const currentIndex = letters.findIndex(l => l.letter === this.selectedLetter.letter);
    const previousIndex = (currentIndex - 1 + letters.length) % letters.length;
    this.selectedLetter = letters[previousIndex];
    this.updateAudioSource();
  }
}
