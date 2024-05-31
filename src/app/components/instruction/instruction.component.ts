import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss'],
})
export class InstructionComponent implements OnInit {
  @Input() lesson!: string;
  lessonTitle!: string;
  lessonDescription!: string;
  instructions!: string;

  constructor(public modalController: ModalController, private router: Router) {}

  ngOnInit() {
    this.setLessonContent();
  }

  setLessonContent() {
    if (this.lesson === 'lesson-one') {
      this.lessonTitle = 'Lesson 1';
      this.lessonDescription = 'Find matching pairs of letters!';
      this.instructions = 'Tap one card, then another to find the matching pair of letters. Keep matching until you\'ve paired them all!';
    } else if (this.lesson === 'lesson-two') {
      this.lessonTitle = 'Lesson 2';
      this.lessonDescription = 'Reading Comprehension';
      this.instructions = 'Read the statement carefully, then choose the right word from the options provided to complete the sentence.';
    }
  }

  close() {
    if (this.lesson === 'lesson-one') {
      this.router.navigate(['/lesson-one']);
    } else if (this.lesson === 'lesson-two') {
      this.router.navigate(['/lesson-two']);
    }
    this.modalController.dismiss();
  }
}
