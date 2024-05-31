import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lesson-one-play',
  templateUrl: './lesson-one-play.page.html',
  styleUrls: ['./lesson-one-play.page.scss'],
})
export class LessonOnePlayPage implements OnInit {
  consonants: any[] = [
    { letter: 'B', objectName: 'Ball', pronunciation: 'ball', letterImgPath: '../../../../assets/lessonOnePlayObjects/ball.png' },
    { letter: 'C', objectName: 'Cat', pronunciation: 'cat', letterImgPath: '../../../../assets/lessonOnePlayObjects/cat.png' },
    { letter: 'D', objectName: 'Dog', pronunciation: 'dog', letterImgPath: '../../../../assets/lessonOnePlayObjects/dog.png' },
    { letter: 'F', objectName: 'Fish', pronunciation: 'fih-ish', letterImgPath: '../../../../assets/lessonOnePlayObjects/fish.png' },
    { letter: 'G', objectName: 'Guitar', pronunciation: 'gih-tar', letterImgPath: '../../../../assets/lessonOnePlayObjects/guitar.png' },
    { letter: 'H', objectName: 'Hat', pronunciation: 'huh-t', letterImgPath: '../../../../assets/lessonOnePlayObjects/hat.png' },
    { letter: 'J', objectName: 'Jellyfish', pronunciation: 'jel-ee-fish', letterImgPath: '../../../../assets/lessonOnePlayObjects/jellyfish.png' },
    { letter: 'K', objectName: 'Kite', pronunciation: 'kite', letterImgPath: '../../../../assets/lessonOnePlayObjects/kite.png' },
    { letter: 'L', objectName: 'Lamp', pronunciation: 'lamp', letterImgPath: '../../../../assets/lessonOnePlayObjects/lamp.png' },
    { letter: 'M', objectName: 'Mouse', pronunciation: 'maws', letterImgPath: '../../../../assets/lessonOnePlayObjects/mouse.png' },
    { letter: 'N', objectName: 'Nest', pronunciation: 'nest', letterImgPath: '../../../../assets/lessonOnePlayObjects/nest.png' },
    { letter: 'P', objectName: 'Piano', pronunciation: 'pee-an-oh', letterImgPath: '../../../../assets/lessonOnePlayObjects/piano.png' },
    { letter: 'Q', objectName: 'Queen', pronunciation: 'kween', letterImgPath: '../../../../assets/lessonOnePlayObjects/queen.png' },
    { letter: 'R', objectName: 'Rainbow', pronunciation: 'rain-bohw', letterImgPath: '../../../../assets/lessonOnePlayObjects/rainbow.png' },
    { letter: 'S', objectName: 'Sun', pronunciation: 'sun', letterImgPath: '../../../../assets/lessonOnePlayObjects/sun.png' },
    { letter: 'T', objectName: 'Tiger', pronunciation: 'ty-ger', letterImgPath: '../../../../assets/lessonOnePlayObjects/tiger.png' },
    { letter: 'V', objectName: 'Violin', pronunciation: 'vy-oh-lin', letterImgPath: '../../../../assets/lessonOnePlayObjects/violin.png' },
    { letter: 'W', objectName: 'Watch', pronunciation: 'wach', letterImgPath: '../../../../assets/lessonOnePlayObjects/watch.png' },
    { letter: 'X', objectName: 'Xylophone', pronunciation: 'zy-loh-fown', letterImgPath: '../../../../assets/lessonOnePlayObjects/xylophone.png' },
    { letter: 'Y', objectName: 'Yo-yo', pronunciation: 'yoyo', letterImgPath: '../../../../assets/lessonOnePlayObjects/yoyo.png' },
    { letter: 'Z', objectName: 'Zipper', pronunciation: 'zip-per', letterImgPath: '../../../../assets/lessonOnePlayObjects/zipper.png' }
  ];
  vowels: any[] = [
    { letter: 'A', objectName: 'Apple', pronunciation: 'uh-pohl', letterImgPath: '../../../../assets/lessonOnePlayObjects/apple.png' },
    { letter: 'E', objectName: 'Egg', pronunciation: 'eg', letterImgPath: '../../../../assets/lessonOnePlayObjects/egg.png' },
    { letter: 'I', objectName: 'Igloo', pronunciation: 'ih-gloo', letterImgPath: '../../../../assets/lessonOnePlayObjects/igloo.png' },
    { letter: 'O', objectName: 'Orange', pronunciation: 'or-enj', letterImgPath: '../../../../assets/lessonOnePlayObjects/orange.png' },
    { letter: 'U', objectName: 'Umbrella', pronunciation: 'um-brell-uh', letterImgPath: '../../../../assets/lessonOnePlayObjects/umbrella.png' }
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
