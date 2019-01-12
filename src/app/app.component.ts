import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pickedColor: string = `#ff0080`;
  size: number = 30;
  word: string[] = ['W', 'o', 'r', 'd'];
  favoriteTalk: string;
  talksList = [
    {
      title: 'Angular Component Dev Kit',
      url: 'https://www.youtube.com/embed/ngyEpcwkLW0',
      conference: 'ng-conf 2018',
      presenters: 'Elad Bezalel and Kristiyan Kostadinov',
    },
    {
      title: 'Mad Science with Angular Compiler',
      conference: 'AngularUP 2017',
      url: 'https://www.youtube.com/watch?v=E707WJakn7A',
      presenters: 'Minko Gechev',
    },
    {
      title: 'Fast But not Furious: Debugging User Interaction Performance Issues\n',
      conference: 'Fullstack London 2018',
      url: 'https://skillsmatter.com/skillscasts/11898-fast-but-not-furious-debugging-user-interaction-performance-issues',
      presenters: 'Anna Migas',
    },
  ];

  todaysDate = Date.now();

  watchNext = [];
  talk = {
    title: 'Sample',
    conference: 'Sample',
    url: 'Sample',
    presenters: 'Sample',
  };

  onPickColor(color) {
    this.pickedColor = color;
  }

  onChangeFontSize(size) {
    this.size = size;
  }

  onEnterText(word) {
    this.word = word.split('');
  }

  onAdd(payload) {
    this.watchNext = [
      ...this.watchNext,
      payload,
    ];
    console.log(this.watchNext)
  }
}
