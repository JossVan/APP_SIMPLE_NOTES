import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Note } from '../interfaces/note.interface';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  host: string = '';
  constructor(private http: HttpClient) { 
    this.host = environment.host
  }

  saveNote(note: Note): Observable<any>{
    return this.http.post(`${this.host}createNote`, note);
  }

  getNotes(): Observable<any>{
    return this.http.get(`${this.host}getNotes`);
  }

  updateCompleteNote(id:number, complete: boolean | number): Observable<any>{
    return this.http.put(`${this.host}updateCompleteNote/${id}`, {complete});
  }

  deteleNote(id:number): Observable<any>{
    return this.http.delete(`${this.host}deleteNote/${id}`);
  }
}


