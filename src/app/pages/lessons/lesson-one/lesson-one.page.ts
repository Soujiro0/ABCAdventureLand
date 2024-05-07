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
    this.vowels = this.data.generateVowels();
    this.consonants = this.data.generateConsonants();
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
