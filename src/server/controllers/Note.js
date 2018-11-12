import Note from '../models/Note';

export const getAll = (req, res) => {
  console.log('getAll');
  Note.find({}, (err, notes) => {
    if (err) {
      console.error(`get all models error: ${err}`);
      res.status(500).send(err);
    }
    const mappedNotes = notes.map((note) => ({
      id: note._id,
      title: note.title,
      content: note.content
    }));
    res.status(200).json(mappedNotes);
  });
};

export const getById = (req, res) => {
  console.log('getById');
  Note.findById(req.params.noteId, (err, note) => {
    if (err) {
      console.error(`get all models error: ${err}`);
      res.status(500).send(err);
    }
    const mappedNote = {
      id: note._id,
      title: note.title,
      content: note.content
    };
    res.status(200).json(mappedNote);
  });
};

export const createNote = (req, res) => {
  console.log('createNote');
  let newNote = new Note(req.body);
  newNote.save((err, note) => {
    if (err) {
      res.status(500).send(err);
    }
    res.sendStatus(200);
  });
};

export const updateNote = (req, res) => {
  console.log('updateNote');
  Note.findByIdAndUpdate(
    req.params.noteId,
    req.body,
    { new: true },
    (err, note) => {
      if (err) {
        res.status(500).send(err);
      }
      res.sendStatus(200);
    }
  );
};

export const deleteNote = (req, res) => {
  console.log('deleteNote');
  Note.findByIdAndDelete(req.params.noteId,
    (err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.status(200).json({ message: 'Note successfully deleted' });
    });
};
