import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/models/profile';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-lesson-one-play',
  templateUrl: './lesson-one-play.page.html',
  styleUrls: ['./lesson-one-play.page.scss'],
})
export class LessonOnePlayPage implements OnInit {
  vowels: any[] = [
    { itemNo: 1, letter: 'A', objectName: 'Apple', pronunciation: 'uh-pohl', letterImgPath: '../../../../assets/lessonOnePlayObjects/apple.png' },
    { itemNo: 2, letter: 'E', objectName: 'Egg', pronunciation: 'eg', letterImgPath: '../../../../assets/lessonOnePlayObjects/egg.png' },
    { itemNo: 3, letter: 'I', objectName: 'Igloo', pronunciation: 'ih-gloo', letterImgPath: '../../../../assets/lessonOnePlayObjects/igloo.png' },
    { itemNo: 4, letter: 'O', objectName: 'Orange', pronunciation: 'or-enj', letterImgPath: '../../../../assets/lessonOnePlayObjects/orange.png' },
    { itemNo: 5, letter: 'U', objectName: 'Umbrella', pronunciation: 'um-brell-uh', letterImgPath: '../../../../assets/lessonOnePlayObjects/umbrella.png' }
  ];
  consonants: any[] = [
    { itemNo: 6, letter: 'B', objectName: 'Ball', pronunciation: 'ball', letterImgPath: '../../../../assets/lessonOnePlayObjects/ball.png' },
    { itemNo: 7, letter: 'C', objectName: 'Cat', pronunciation: 'cat', letterImgPath: '../../../../assets/lessonOnePlayObjects/cat.png' },
    { itemNo: 8, letter: 'D', objectName: 'Dog', pronunciation: 'dog', letterImgPath: '../../../../assets/lessonOnePlayObjects/dog.png' },
    { itemNo: 9, letter: 'F', objectName: 'Fish', pronunciation: 'fih-ish', letterImgPath: '../../../../assets/lessonOnePlayObjects/fish.png' },
    { itemNo: 10, letter: 'G', objectName: 'Guitar', pronunciation: 'gih-tar', letterImgPath: '../../../../assets/lessonOnePlayObjects/guitar.png' },
    { itemNo: 11, letter: 'H', objectName: 'Hat', pronunciation: 'huh-t', letterImgPath: '../../../../assets/lessonOnePlayObjects/hat.png' },
    { itemNo: 12, letter: 'J', objectName: 'Jellyfish', pronunciation: 'jel-ee-fish', letterImgPath: '../../../../assets/lessonOnePlayObjects/jellyfish.png' },
    { itemNo: 13, letter: 'K', objectName: 'Kite', pronunciation: 'kite', letterImgPath: '../../../../assets/lessonOnePlayObjects/kite.png' },
    { itemNo: 14, letter: 'L', objectName: 'Lamp', pronunciation: 'lamp', letterImgPath: '../../../../assets/lessonOnePlayObjects/lamp.png' },
    { itemNo: 15, letter: 'M', objectName: 'Mouse', pronunciation: 'maws', letterImgPath: '../../../../assets/lessonOnePlayObjects/mouse.png' },
    { itemNo: 16, letter: 'N', objectName: 'Nest', pronunciation: 'nest', letterImgPath: '../../../../assets/lessonOnePlayObjects/nest.png' },
    { itemNo: 17, letter: 'P', objectName: 'Piano', pronunciation: 'pee-an-oh', letterImgPath: '../../../../assets/lessonOnePlayObjects/piano.png' },
    { itemNo: 18, letter: 'Q', objectName: 'Queen', pronunciation: 'kween', letterImgPath: '../../../../assets/lessonOnePlayObjects/queen.png' },
    { itemNo: 19, letter: 'R', objectName: 'Rainbow', pronunciation: 'rain-bohw', letterImgPath: '../../../../assets/lessonOnePlayObjects/rainbow.png' },
    { itemNo: 20, letter: 'S', objectName: 'Sun', pronunciation: 'sun', letterImgPath: '../../../../assets/lessonOnePlayObjects/sun.png' },
    { itemNo: 21, letter: 'T', objectName: 'Tiger', pronunciation: 'ty-ger', letterImgPath: '../../../../assets/lessonOnePlayObjects/tiger.png' },
    { itemNo: 22, letter: 'V', objectName: 'Violin', pronunciation: 'vy-oh-lin', letterImgPath: '../../../../assets/lessonOnePlayObjects/violin.png' },
    { itemNo: 23, letter: 'W', objectName: 'Watch', pronunciation: 'wach', letterImgPath: '../../../../assets/lessonOnePlayObjects/watch.png' },
    { itemNo: 24, letter: 'X', objectName: 'Xylophone', pronunciation: 'zy-loh-fown', letterImgPath: '../../../../assets/lessonOnePlayObjects/xylophone.png' },
    { itemNo: 25, letter: 'Y', objectName: 'Yo-yo', pronunciation: 'yoyo', letterImgPath: '../../../../assets/lessonOnePlayObjects/yoyo.png' },
    { itemNo: 26, letter: 'Z', objectName: 'Zipper', pronunciation: 'zip-per', letterImgPath: '../../../../assets/lessonOnePlayObjects/zipper.png' }
  ];
  selectedLetter: any;
  letterType: string = 'consonants';
  audio: HTMLAudioElement = new Audio();

  // User Profile
  currentItem: number = 0;
  currentAccount!: Profile;

  constructor(private route: ActivatedRoute, private data: DataProviderService) { }

  ngOnInit() {
    this.currentAccount = this.data.currentLoginProfile;
    this.route.paramMap.subscribe(params => {
      const letter = params.get('letter')!;
      this.letterType = params.get('type') || 'consonants';
      this.selectedLetter = this.getLetter(letter, this.letterType);
      this.currentItem = this.selectedLetter.itemNo - 1;
      console.log(`${this.letterType}, ${this.currentItem}`);
      this.loadAudio();
    });
  }

  // Gets the value of segment on lesson one page
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
    this.currentAccount.progress![0].lessons[0].items[this.currentItem].isFinished = true;
    this.data.updateProfile(this.currentAccount.id, this.currentAccount);
  }

  nextLetter() {
    const letters = this.letterType === 'vowels' ? this.vowels : this.consonants;
    const currentIndex = letters.findIndex(l => l.letter === this.selectedLetter.letter);
    const nextIndex = (currentIndex + 1) % letters.length;
    this.selectedLetter = letters[nextIndex];
    // currentItem is updated
    this.currentItem = this.selectedLetter.itemNo - 1;
    console.log(this.currentItem);
    console.log(this.selectedLetter.itemNo);
    this.updateAudioSource();
  }

  previousLetter() {
    const letters = this.letterType === 'vowels' ? this.vowels : this.consonants;
    const currentIndex = letters.findIndex(l => l.letter === this.selectedLetter.letter);
    const previousIndex = (currentIndex - 1 + letters.length) % letters.length;
    this.selectedLetter = letters[previousIndex];
    // currentItem is updated
    this.currentItem = this.selectedLetter.itemNo - 1;
    console.log(this.currentItem);
    console.log(this.selectedLetter.itemNo);
    this.updateAudioSource();
  }
}
