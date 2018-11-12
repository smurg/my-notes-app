import mongoose from 'mongoose';

const connectToDb = ({ host, port }/* we can send user and pass also */) => {
  
  mongoose.connect(`mongodb://${host}:${port}/notes`, { useNewUrlParser: true })
    .then(
      () => { 
        /** ready to use. */
        console.log('connection with db -- OPENED');
      },
      err => { 
        console.error('connection with db -- Failed!', err);
      }
    );
};

export default connectToDb;
