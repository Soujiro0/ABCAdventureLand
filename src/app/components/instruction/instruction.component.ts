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
  imgObjectPath!: string;

  constructor(public modalController: ModalController, private router: Router) {}

  ngOnInit() {
    this.setLessonContent();
  }

  setLessonContent() {
    if (this.lesson === 'lesson-one') {
      this.lessonTitle = 'Lesson 1';
      this.lessonDescription = 'Find matching pairs of letters!';
      this.instructions = 'Tap one card, then another to find the matching pair of letters. Keep matching until you\'ve paired them all!';
      this.imgObjectPath = '../../../assets/images/instruction/instructionl1object.png';
    } else if (this.lesson === 'lesson-two') {
      this.lessonTitle = 'Lesson 2';
      this.lessonDescription = 'Reading Comprehension';
      this.instructions = 'Read the statement carefully, then choose the right word from the options provided to complete the sentence.';
      this.imgObjectPath = '../../../assets/images/instruction/instructionl2object.png';
    } else if (this.lesson === 'quiz-one') {
      this.lessonTitle = 'QUIZ 1';
      this.lessonDescription = 'Find matching pairs of letters!';
      this.instructions = 'Tap one card, then another to find the matching pair of letters. Keep matching until you\'ve paired them all!';
      this.imgObjectPath = '../../../assets/images/instruction/instructionq1object.png';
    } else if (this.lesson === 'quiz-two') {
      this.lessonTitle = 'QUIZ 2';
      this.lessonDescription = 'Fill in the blank!';
      this.instructions = 'Choose the letter that matches the missing one. Select the correct letter to complete the sequence.';
      this.imgObjectPath = '../../../assets/images/instruction/instructionq2object.png';
    }
  }

  close() {
    if (this.lesson === 'lesson-one') {
      this.router.navigate(['/lesson-one']);
    } else if (this.lesson === 'lesson-two') {
      this.router.navigate(['/lesson-two']);
    } else if (this.lesson === 'quiz-one') {
      this.router.navigate(['/quiz-one']);
    } else if (this.lesson === 'quiz-two') {
      this.router.navigate(['/quiz-two']);
    }
    this.modalController.dismiss();
  }
}
