import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
