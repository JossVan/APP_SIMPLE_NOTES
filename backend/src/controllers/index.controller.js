"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNote = exports.UpdateCompleteNote = exports.createNote = exports.getAllNotes = exports.getNotes = exports.indexWelcome = void 0;
const database_1 = require("../../database");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
function indexWelcome(req, res) {
    return res.json('Bienvenido a la API de notas :D');
}
exports.indexWelcome = indexWelcome;
function getNotes(req, res) {
    return res.json('Redes2 | API Proyecto 2 :D');
}
exports.getNotes = getNotes;
//GET ALL NOTES
function getAllNotes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield (0, database_1.connect)();
            const notes = yield conn.query('SELECT * FROM notes WHERE `status` = 1;');
            res.status(202);
            return res.status(202).json({
                success: true,
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
    });
}
exports.getAllNotes = getAllNotes;
//CREATE NEW NOTE
function createNote(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let { note, creation_date, complete } = req.body;
            const conn = yield (0, database_1.connect)();
            const newNote = {
                note,
                creation_date: new Date(creation_date),
                complete,
                status: 1
            };
            yield conn.query('INSERT INTO notes (note,`status`,creation_date,complete) values(?,?,?,?)', [newNote.note,
                newNote.status,
                newNote.creation_date,
                newNote.complete]);
            res.status(202);
            return res.json({
                success: true,
                note: newNote
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
    });
}
exports.createNote = createNote;
//UPDATE NOTE
function UpdateCompleteNote(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = req.params.id;
            const conn = yield (0, database_1.connect)();
            yield conn.query('UPDATE notes SET complete = ? where id = ?', [req.body.complete, parseInt(id)]);
            res.status(202);
            return res.json({
                success: true,
                id: id
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
    });
}
exports.UpdateCompleteNote = UpdateCompleteNote;
//DELETE NOTE
function deleteNote(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let id = req.params.id;
            const conn = yield (0, database_1.connect)();
            yield conn.query('UPDATE notes SET `status` = 0 where id = ?', [id]);
            res.status(202);
            return res.json({
                success: true,
                id: id
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
    });
}
exports.deleteNote = deleteNote;
