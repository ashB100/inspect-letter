import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InspectLetterDirective } from './inspect-letter.directive';
import { TextComponent } from './text/inspectable-text.component';

@NgModule({
  declarations: [
    AppComponent,
    InspectLetterDirective,
    TextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
