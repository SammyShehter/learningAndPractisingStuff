const fs = require('fs');

const getNotes = () => {
  return 'Your notes...'  
}

const addNote = (props) => {
  const {title, body} = props;

  const notes = loadNotes();

  const duplicateTitles = notes.filter((note) => {
    if(note.title === title) 
      return true;
  });

  if (duplicateTitles.length)
    return console.log('Title is already taken');

  notes.push({
    title,
    body,
  });

  saveNotes(notes);

  return console.log('Note has been added!');

}

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', notesJSON);
}

const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync('notes.json').toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
}

module.exports = {getNotes, addNote};