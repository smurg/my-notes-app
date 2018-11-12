import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Note = mongoose.model('Note', NoteSchema);
export default Note;
/* 
  A model is a class with which we construct documents. 
  In this case, each document will be a Note with properties (title, content) 
  and behaviors as declared in our schema. 
*/
