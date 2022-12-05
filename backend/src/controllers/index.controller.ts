import { Request, Response } from 'express'
import { connect } from '../../database';
import dotenv from 'dotenv';
import { Note } from '../interfaces/note.interfaces';
dotenv.config();
export function indexWelcome(req: Request, res: Response): Response {
   return res.json('Bienvenido a la API de notas :D'); 
}

export function getNotes(req: Request, res: Response): Response {
   return res.json('Redes2 | API Proyecto 2 :D'); 
}

//GET ALL NOTES
export async function getAllNotes(req: Request, res: Response): Promise<Response | void> {
   try {
       
       const conn = await connect();
       const notes = await conn.query('SELECT * FROM notes WHERE `status` = 1;');
       res.status(202);
       return res.status(202).json({
           success:true,
           notas: notes[0],
       });
   }
   catch (e) {
       console.log(e);
       res.status(404);
       return res.json({
           message: 'Error :o',
           status: 404
       });
   }
}

//CREATE NEW NOTE
export async function createNote(req: Request, res: Response):Promise<Response | void> {
   try {

       let { note, creation_date, complete} = req.body;
       const conn = await connect();              

       const newNote: Note = {
           note,
           creation_date : new Date(creation_date),
           complete,
           status: 1
       }

       await conn.query('INSERT INTO notes (note,`status`,creation_date,complete) values(?,?,?,?)', 
       [newNote.note, 
        newNote.status, 
        newNote.creation_date, 
        newNote.complete]);

       res.status(202);
       return res.json({
           success : true,
           note: newNote
       });
   
   } catch (e) {
       console.log(e);
       res.status(404);
       return res.json({
           message: 'Error :o',
           status: 404
       });
   }
}


//UPDATE NOTE
export async function UpdateCompleteNote(req: Request, res: Response):Promise<Response | void> {
    try {
 
        let id = req.params.id;
        const conn = await connect();              
 
        await conn.query('UPDATE notes SET complete = ? where id = ?', [req.body.complete, parseInt(id) ]);
        res.status(202);
        return res.json({
            success: true,
            id: id 
        });
    
    } catch (e) {
        console.log(e);
        res.status(404);
        return res.json({
            message: 'Error :o',
            status: 404
        });
    }
 }

 //DELETE NOTE
export async function deleteNote(req: Request, res: Response):Promise<Response | void> {
    try {
 
        let id = req.params.id;
        const conn = await connect();              
 
        await conn.query('UPDATE notes SET `status` = 0 where id = ?', [ id ]);
        res.status(202);
        return res.json({
            success: true,
            id: id 
        });
    
    } catch (e) {
        console.log(e);
        res.status(404);
        return res.json({
            message: 'Error :o',
            status: 404
        });
    }
 }