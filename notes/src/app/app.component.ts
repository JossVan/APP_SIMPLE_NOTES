import { Note } from './interfaces/note.interface';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  date =( ((new Date()).toISOString()).split('T'))[0];
  note: Note = {
    id: -1,
    note: '',
    date: new Date(),
    complete: false
  };
  getNote(event: Note){
    this.note = event;
  }


}
