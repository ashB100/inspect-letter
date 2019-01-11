import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HighlightLetterDirective } from './highlight-letter.directive';
import { TextComponent } from './text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightLetterDirective,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
