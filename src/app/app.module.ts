import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LocationPanelComponent } from './components/location-panel/location-panel.component';
import { CharacterPanelComponent } from './components/character-panel/character-panel.component';
import { MessagePanelComponent } from './components/message-panel/message-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationPanelComponent,
    CharacterPanelComponent,
    MessagePanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
