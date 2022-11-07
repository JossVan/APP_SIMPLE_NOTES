import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  note: Note | undefined;
  listNotes : Array<Note> = new Array<Note>();

  @Input() set notes(value: Note){
    this.note = value;
    if(this.note.note != ''){
      this.listNotes.push(this.note)
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onchange(id:number, index: number){
    this.listNotes.forEach((note:Note)=>{
      note.id == id? note.complete = !note.complete: note.complete
    });

  }
}
