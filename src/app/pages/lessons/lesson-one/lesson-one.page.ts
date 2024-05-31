import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Letter } from 'src/app/models/letter';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-lesson-one',
  templateUrl: './lesson-one.page.html',
  styleUrls: ['./lesson-one.page.scss'],
})
export class LessonOnePage implements OnInit {
  vowels: Letter[] = [];
  consonants: Letter[] = [];
  selectedSegment: string = 'vowels';

  constructor(private data: DataProviderService, private router: Router) { }

  ngOnInit(): void {
    this.consonants = [
      new Letter('B', 'Ball', 'ball', 'assets/images/consonants/B.png', '', ''),
      new Letter('C', 'Cat', 'cat', 'assets/images/consonants/C.png', '', ''),
      new Letter('D', 'Dog', 'dog', 'assets/images/consonants/D.png', '', ''),
      new Letter('F', 'Fish', 'fih-ish', 'assets/images/consonants/F.png', '', ''),
      new Letter('G', 'Guitar', 'gih-tar', 'assets/images/consonants/G.png', '', ''),
      new Letter('H', 'Hat', 'huh-t', 'assets/images/consonants/H.png', '', ''),
      new Letter('J', 'Jellyfish', 'jel-ee-fish', 'assets/images/consonants/J.png', '', ''),
      new Letter('K', 'Kite', 'kite', 'assets/images/consonants/K.png', '', ''),
      new Letter('L', 'Lamp', 'lamp', 'assets/images/consonants/L.png', '', ''),
      new Letter('M', 'Mouse', 'maws', 'assets/images/consonants/M.png', '', ''),
      new Letter('N', 'Nest', 'nest', 'assets/images/consonants/N.png', '', ''),
      new Letter('P', 'Piano', 'pee-an-oh', 'assets/images/consonants/P.png', '', ''),
      new Letter('Q', 'Queen', 'kween', 'assets/images/consonants/Q.png', '', ''),
      new Letter('R', 'Rainbow', 'rain-bohw', 'assets/images/consonants/R.png', '', ''),
      new Letter('S', 'Sun', 'sun', 'assets/images/consonants/S.png', '', ''),
      new Letter('T', 'Tiger', 'ty-ger', 'assets/images/consonants/T.png', '', ''),
      new Letter('V', 'Violin', 'vy-oh-lin', 'assets/images/consonants/V.png', '', ''),
      new Letter('W', 'Watch', 'wach', 'assets/images/consonants/W.png', '', ''),
      new Letter('X', 'Xylophone', 'zy-loh-fown', 'assets/images/consonants/X.png', '', ''),
      new Letter('Y', 'Yo-yo', 'yoyo', 'assets/images/consonants/Y.png', '', ''),
      new Letter('Z', 'Zipper', 'zip-per', 'assets/images/consonants/Z.png', '', '')
    ];

    this.vowels = [
      new Letter('A', 'Apple', 'uh-pohl', 'assets/images/vowels/A.png', '', ''),
      new Letter('E', 'Egg', 'eg', 'assets/images/vowels/E.png', '', ''),
      new Letter('I', 'Igloo', 'ih-gloo', 'assets/images/vowels/I.png', '', ''),
      new Letter('O', 'Orange', 'or-enj', 'assets/images/vowels/O.png', '', ''),
      new Letter('U', 'Umbrella', 'um-brell-uh', 'assets/images/vowels/U.png', '', '')
    ];
  }

  selectSegment(event: any): void {
    const selectedValue = event.detail.value;
    this.selectedSegment = selectedValue;
  }

  displayContent(): string {
    return this.selectedSegment;
  }

  openLessonOnePlay(letter: Letter): void {
    this.router.navigate(['/lesson-one-play', { letter: letter.letter, type: this.selectedSegment }]);
  }
}
