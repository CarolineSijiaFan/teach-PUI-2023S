class Notecard {
    constructor(imageURL, title, body) {
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;
    
        this.element = null;
    }
}

const notecardSet = new Set();

function addNewNote(imageURL, title, body) {
    const notecard = new Notecard(imageURL, title, body);
    notecardSet.add(notecard);
    return notecard;
}

function createElement(notecard) {
    console.log('Creating an Element!')
}

const notecardOne = addNewNote(
    "assets/warhol-rhino.png",
    "The first note title",
    "The first note body"
);
const notecardTwo = addNewNote(
    "assets/warhol-frog.png",
    "The second note title",
    "The second note body"
);

addNewNote("test image", "test title", "test body");

for (const notecard of notecardSet) {
    console.log(notecard);
    createElement(notecard);
  }