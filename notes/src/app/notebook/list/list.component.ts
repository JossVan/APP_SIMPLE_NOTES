import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/note.interface';
import swal from'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  note: Note | undefined;
  listNotes : Array<Note> = new Array<Note>();
  showButton = false;

  @Input() set notes(value: Note){
    this.note = value;
    if(this.note.note != ''){
      this.listNotes.push(this.note);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  onchange(id:number, index: number){
    let noteSelected = this.listNotes[index];
    noteSelected.id == id? noteSelected.complete = !noteSelected.complete: noteSelected.complete;

    noteSelected.complete?
    this.listNotes.unshift(this.listNotes.splice(index, 1)[0]): this.listNotes.push(this.listNotes.splice(index, 1)[0]);;
    console.log('-------------- Acción del checkbox ----------------')
    console.log(this.listNotes);
  }

  delete(index:number){

    swal.fire({
      title: 'Eliminar nota',
      text: "¿Estás seguro que deseas eliminar esta nota?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero eliminar esta nota'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isConfirmed(index);
      }
    })
  }

  isConfirmed(index:number){
    this.listNotes.splice(index,1);
    console.log('-------------- Eliminar un elemento ----------------')
    console.log(this.listNotes);
    swal.fire('¡Nota eliminada!', '', 'success');
    swal.fire(
      'Eliminada',
      'Esta nota ha sido eliminada.',
      'success'
    )
  }

}
