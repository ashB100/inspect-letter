import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './inspectable-text.component.html',
  styleUrls: ['./inspectable-text.component.scss']
})
export class TextComponent implements OnInit {
  @Input() word: string[];
  @Input() size: number;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
