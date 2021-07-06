import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LocationPanelComponent } from './components/location-panel/location-panel.component';
import { CharacterPanelComponent } from './components/character-panel/character-panel.component';
import { MessagePanelComponent } from './components/message-panel/message-panel.component';
import { GameButtonComponent } from './components/common/game-button/game-button.component';
import { ProgressBarComponent } from './components/common/progress-bar/progress-bar.component';
import { DisplayNumberPipe } from './pipes/display-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LocationPanelComponent,
    CharacterPanelComponent,
    MessagePanelComponent,
    GameButtonComponent,
    ProgressBarComponent,
    DisplayNumberPipe
  ],
  imports: [
    BrowserModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
