import { Component, OnInit } from '@angular/core';
import { Letter } from 'src/app/models/letter';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-lesson-one',
  templateUrl: './lesson-one.page.html',
  styleUrls: ['./lesson-one.page.scss'],
})
export class LessonOnePage implements OnInit{
  vowels : Letter[] = [];
  consonants : Letter[] = [];
  selectedSegment: string = 'vowels';

  constructor(private data : DataProviderService) { }

  ngOnInit(): void {

    this.consonants = [
      new Letter('B', 'B' , 'b', 'assets/images/consonants/B.png', '', ''),
      new Letter('C', 'C' , 'c', 'assets/images/consonants/C.png', '', ''),
      new Letter('D', 'D' , 'd', 'assets/images/consonants/D.png', '', ''),
      new Letter('F', 'F' , 'f', 'assets/images/consonants/F.png', '', ''),
      new Letter('G', 'G' , 'g', 'assets/images/consonants/G.png', '', ''),
      new Letter('H', 'H' , 'h', 'assets/images/consonants/H.png', '', ''),
      new Letter('J', 'J' , 'j', 'assets/images/consonants/J.png', '', ''),
      new Letter('K', 'K' , 'k', 'assets/images/consonants/K.png', '', ''),
      new Letter('L', 'L' , 'l', 'assets/images/consonants/L.png', '', ''),
      new Letter('M', 'M' , 'm', 'assets/images/consonants/M.png', '', ''),
      new Letter('N', 'N' , 'n', 'assets/images/consonants/N.png', '', ''),
      new Letter('P', 'P' , 'p', 'assets/images/consonants/P.png', '', ''),
      new Letter('Q', 'Q' , 'q', 'assets/images/consonants/Q.png', '', ''),
      new Letter('R', 'R' , 'r', 'assets/images/consonants/R.png', '', ''),
      new Letter('S', 'S' , 's', 'assets/images/consonants/S.png', '', ''),
      new Letter('T', 'T' , 't', 'assets/images/consonants/T.png', '', ''),
      new Letter('V', 'V' , 'v', 'assets/images/consonants/V.png', '', ''),
      new Letter('W', 'W' , 'w', 'assets/images/consonants/W.png', '', ''),
      new Letter('X', 'X' , 'x', 'assets/images/consonants/X.png', '', ''),
      new Letter('Y', 'Y' , 'y', 'assets/images/consonants/Y.png', '', ''),
      new Letter('Z', 'Z' , 'z', 'assets/images/consonants/Z.png', '', '')
    ];

    this.vowels = [
      new Letter('A', 'A' , 'a', 'assets/images/vowels/A.png', '', ''),
      new Letter('E', 'E' , 'e', 'assets/images/vowels/E.png', '', ''),
      new Letter('I', 'I' , 'i', 'assets/images/vowels/I.png', '', ''),
      new Letter('O', 'O' , 'o', 'assets/images/vowels/O.png', '', ''),
      new Letter('U', 'U' , 'u', 'assets/images/vowels/U.png', '', '')
    ];
  }

  //This method is for geting the event value of the segment and pass it to selectedSegment variable
  selectSegment(event : any) : void {
    const selectedValue = event.detail.value;
    this.selectedSegment = (selectedValue === 'vowels') ? 'vowels' : 'consonants';
    this.displayContent();
  }

  //This method returns string and controlling the display of segment
  displayContent() : string{
    return this.selectedSegment.toString();
  }
}
