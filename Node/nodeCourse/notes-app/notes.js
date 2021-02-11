const fs = require("fs");
const chalk = require('chalk')

const listNotes = () => {
    const notes = loadNotes();

    console.log('Your notes...');

    notes.forEach(note => {
        console.log(note.title);
    });
};

const addNote = (props) => {
  const { title, body } = props;

  const notes = loadNotes();

  const duplicateNote = notes.find(note => note.title === title);



  if (duplicateNote) return console.log(chalk.red.inverse('Title is already taken'));


  notes.push({
    title,
    body,
  });

  saveNotes(notes);

  return console.log(chalk.green.inverse('Note has been added!'));
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
};

const removeNote = (props) => {
    const {title} = props;
    const notes = loadNotes();
    const updatedNotes = notes.filter(note => {
        return note.title !== title
    });

    saveNotes(updatedNotes);

    updatedNotes.length === notes.length ? console.log(chalk.red.inverse('Note was not found')) : console.log(chalk.green.inverse(`${title} note was deleted`));
};

const readNote = (props) => {
    const {title} = props;

    const notes = loadNotes();

    const note = notes.find(note => note.title === title);

    if(note) {
        return console.log(`${note.title} \n ${note.body}`);
    } else {
        return console.log(chalk.red.inverse('Note was not found'));
    }
}

module.exports = { listNotes, addNote, removeNote, readNote };
