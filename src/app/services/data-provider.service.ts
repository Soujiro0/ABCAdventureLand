import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  public vowels : any[] = [];
  public consonants : any[] =[];

  constructor() { }

  generateVowels(){
    this.vowels = [
      {
        letter: 'A',
        image: 'assets/images/vowels/A.png',
      },
      {
        letter: 'E',
        image: 'assets/images/vowels/E.png',
      },
      {
        letter: 'I',
        image: 'assets/images/vowels/I.png',
      },
      {
        letter: 'O',
        image: 'assets/images/vowels/O.png',
      },
      {
        letter: 'U',
        image: 'assets/images/vowels/U.png',
      },
    ]
    return this.vowels;
  }

  generateConsonants(){
    this.consonants = [
      {
        letter: 'B',
        image: 'assets/images/consonants/B.png',
      },
      {
        letter: 'C',
        image: 'assets/images/consonants/C.png',
      },
      {
        letter: 'D',
        image: 'assets/images/consonants/D.png',
      },
      {
        letter: 'F',
        image: 'assets/images/consonants/F.png',
      },
      {
        letter: 'G',
        image: 'assets/images/consonants/G.png',
      },
      {
        letter: 'H',
        image: 'assets/images/consonants/H.png',
      },
      {
        letter: 'J',
        image: 'assets/images/consonants/J.png',
      },
      {
        letter: 'K',
        image: 'assets/images/consonants/K.png',
      },
      {
        letter: 'L',
        image: 'assets/images/consonants/L.png',
      },
      {
        letter: 'M',
        image: 'assets/images/consonants/M.png',
      },
      {
        letter: 'N',
        image: 'assets/images/consonants/N.png',
      },
      {
        letter: 'P',
        image: 'assets/images/consonants/P.png',
      },
      {
        letter: 'Q',
        image: 'assets/images/consonants/Q.png',
      },
      {
        letter: 'R',
        image: 'assets/images/consonants/R.png',
      },
      {
        letter: 'S',
        image: 'assets/images/consonants/S.png',
      },
      {
        letter: 'T',
        image: 'assets/images/consonants/T.png',
      },
      {
        letter: 'V',
        image: 'assets/images/consonants/V.png',
      },
      {
        letter: 'W',
        image: 'assets/images/consonants/W.png',
      },
      {
        letter: 'X',
        image: 'assets/images/consonants/X.png',
      },
      {
        letter: 'Y',
        image: 'assets/images/consonants/Y.png',
      },
      {
        letter: 'Z',
        image: 'assets/images/consonants/Z.png',
      },
    ]
    return this.consonants;
  }

}
