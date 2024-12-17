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
import { SkillPanelComponent } from './components/skill-panel/skill-panel.component';
import { StatusPanelComponent } from './components/status-panel/status-panel.component';
import { NavPanelComponent } from './components/nav-panel/nav-panel.component';
import { CharacterSheetPanelComponent } from './components/character-sheet-panel/character-sheet-panel.component';
import { VentureButtonComponent } from './components/common/venture-button/venture-button.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationPanelComponent,
    CharacterPanelComponent,
    MessagePanelComponent,
    GameButtonComponent,
    ProgressBarComponent,
    DisplayNumberPipe,
    SkillPanelComponent,
    StatusPanelComponent,
    NavPanelComponent,
    CharacterSheetPanelComponent,
    VentureButtonComponent
  ],
  imports: [
    BrowserModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
