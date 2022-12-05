import { Router } from "express";

import { createNote, deleteNote, getAllNotes, indexWelcome, UpdateCompleteNote } from '../controllers/index.controller';


const router = Router();

router.route('/').get((indexWelcome));
router.route('/getNotes').get((getAllNotes));
router.route('/createNote').post((createNote));
router.route('/updateCompleteNote/:id').put((UpdateCompleteNote));
router.route('/deleteNote/:id').delete((deleteNote));
export default router;