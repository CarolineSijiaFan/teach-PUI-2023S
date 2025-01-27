class Notecard {

    constructor(imageURL, title, body, elementID) {
        this.noteImageURL = imageURL;
        this.noteTitle = title;
        this.noteBody = body;
    
    
        this.element = document.querySelector(elementID);


        this.updateElement();

        const btnDelete = this.element.querySelector('.icon-delete');
        btnDelete.onclick = this.deleteNote.bind(this);
    }

    updateElement() {    
        const noteImageElement = this.element.querySelector('.notecard-thumbnail');
        const noteTitleElement = this.element.querySelector('.note-title');
        const noteBodyElement = this.element.querySelector('.note-body');
    
        noteImageElement.src = this.noteImageURL;
        noteTitleElement.innerText = this.noteTitle;
        noteBodyElement.innerText = this.noteBody;
    }
    

    deleteNote() {
        console.log('Deleting Note!');
        console.log(this);
    
        this.element.remove();
    
        // Comment these lines out for now:
        // const notecardElement = this.closest('.notecard');
        // notecardElement.remove();
      }
    
}

const notecardOne = new Notecard(
    'assets/warhol-frog.png',
    'This is the First Note',
    'Here is some body text for the first note.',
    '#notecard-one'
)
  
const notecardTwo = new Notecard(
    'assets/warhol-orangutan.png',
    'This is the Second Note',
    'And here is some body text for the second note! What could be next?',
    '#notecard-two'
)
  
const notecardThree = new Notecard(
    'assets/warhol-eagle.png',
    'This is the Third Note',
    'Yep, you guessed it, here is some body text for the third note.',
    '#notecard-three'
)