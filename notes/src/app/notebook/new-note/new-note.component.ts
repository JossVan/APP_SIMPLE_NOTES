import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note, NoteComplete } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  note: string = '';
  @Output() sendNote = new EventEmitter<NoteComplete>();

  constructor() { }

  ngOnInit(): void {

  }

  submit(){

    if(this.note != ''){
      let newNote : NoteComplete = {
        id: -1,
        note: this.note,
        creation_date: new Date(),
        complete: false,
        hover: false
      }
      
      this.note = '';
      this.sendNote.emit(newNote);
    }

  }
}
