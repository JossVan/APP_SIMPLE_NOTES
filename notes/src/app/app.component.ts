import { Note, NoteComplete } from './interfaces/note.interface';
import { Component, Output, EventEmitter } from '@angular/core';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  date =( ((new Date()).toISOString()).split('T'))[0];

  constructor(private noteService: NotesService){

  }
  note: Note = {
    note: '',
    creation_date: new Date(),
    complete: false,
    hover: false
  };

  noteComplete: NoteComplete = {
    id : -1,
    note: '',
    creation_date: new Date(),
    complete: false,
    hover: false
  };

  getNote(event: NoteComplete){
    this.note = event;
    this.noteService.saveNote(this.note).subscribe(result=>{
      if(result.success){
        this.noteComplete = event;
      }
    })
  }


}
