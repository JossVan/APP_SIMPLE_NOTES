import { Component, Input, OnInit } from '@angular/core';
import { Note, NoteComplete } from 'src/app/interfaces/note.interface';
import { NotesService } from 'src/app/services/notes.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  note: NoteComplete | undefined;
  listNotes : Array<NoteComplete> = new Array<NoteComplete>();
  showButton = false;

  @Input() set notes(value: NoteComplete){
    this.note = value;
    this.getNotes();
  }

  constructor(private noteService: NotesService) { }

  ngOnInit(): void {
  }

  onchange(id:number,index:number){

    
    let noteSelected = (this.listNotes.filter(note=> note.id === id))[0];
    noteSelected.id == id? noteSelected.complete = !noteSelected.complete: noteSelected.complete;

    this.noteService.updateCompleteNote(noteSelected.id,noteSelected.complete).subscribe(result=>{
      if(result.success){
        noteSelected.complete?
        this.listNotes.unshift(this.listNotes.splice(index, 1)[0]): this.listNotes.push(this.listNotes.splice(index, 1)[0]);
        console.log('-------------- Acción del checkbox ----------------')
        console.log(this.listNotes);
      }
    });
    
  }

  delete(id:number,index:number){

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
        this.isConfirmed(id,index);
      }
    })
  }

  isConfirmed(id:number, index:number){
    this.listNotes.splice(index,1);
    this.noteService.deteleNote(id).subscribe(result=>{
      if(result.success){
        this.isDelete();
      }
    });
  }

  getNotes(){
    this.noteService.getNotes().subscribe(result=>{
      if(result.status == 404){
        console.log(result);
      }else{
        result.notas.map((item:any)=>{
          item.complete == 1? item.complete = true: item.complete = false;
        });
        this.listNotes = result.notas;
      }
    })
  }

  isDelete(){
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
