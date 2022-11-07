import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './notebook/list/list.component';
import { NewNoteComponent } from './notebook/new-note/new-note.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewNoteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
