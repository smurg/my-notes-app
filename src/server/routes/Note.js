import express from 'express';
import * as noteController from '../controllers/Note';

const router = express.Router();

// GET /api/notes/
router.get('/', noteController.getAll);
// GET /api/notes/:note_id
router.get('/:noteId', noteController.getById);
// POST /api/notes/
router.post('/', noteController.createNote);
// PUT /api/notes/:note_id
router.put('/:noteId', noteController.updateNote);
// DELETE /api/notes/:note_id
router.delete('/:noteId', noteController.deleteNote);

export default router;