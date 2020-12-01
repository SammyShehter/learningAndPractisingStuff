const validator = require('validator');
const chalk = require('chalk');
const {getNotes, addNote} = require('./notes');
const yargs = require('yargs');
const { string } = require('yargs');

// const msg = getNotes();

// console.log(msg);

// console.log(chalk.hex('#DEADED').underline('Success!')); 

// console.log(process.argv);
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },  
    handler: addNote(yargs.argv)
});

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log('Removing new note');
    }
});


yargs.command({
    command: 'list',
    describe: 'Listing a note',
    handler: () => {
        console.log('Listing new note');
    }
});

yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: () => {
        console.log('Reading new note');
    }
});

//calling argv command
yargs.argv

