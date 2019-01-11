import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pickedColor: string = `#ff0080`;
  size: number = 30;
  word: string[] = ['W','o','r','d'];

  onPickColor(color) {
    this.pickedColor = color;
  }

  onChangeFontSize(size) {
    this.size = size;
  }

  onEnterText(word) {
    this.word = word.split('');
  }
}
