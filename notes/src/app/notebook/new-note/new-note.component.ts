import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit {

  note: string = '';
  count: number = 0;
  @Output() sendNote = new EventEmitter<Note>();

  constructor() { }

  ngOnInit(): void {

  }

  submit(){

    if(this.note != ''){
      let newNote : Note = {
        id: this.count,
        note: this.note,
        date: new Date(),
        complete: false
      }
      this.count++;
      this.sendNote.emit(newNote);
    }

  }
}
