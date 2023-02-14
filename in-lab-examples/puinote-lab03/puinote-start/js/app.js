console.log('Started Application.');

const notecard =
{
    noteTitle: 'This is the Title of the Note!',
    noteBody: 'And here is the body of the note.',
    noteImageURL: 'assets/warhol-frog.png',
};


notecard.element = document.querySelector('#notecard-one');


function updateElement() {
    const noteImageElement = notecard.element.querySelector('.notecard-thumbnail');
    const noteTitleElement = notecard.element.querySelector('.note-title');
    const noteBodyElement = notecard.element.querySelector('.note-body');
    
    noteImageElement.src = notecard.noteImageURL;
    noteTitleElement.innerText = notecard.noteTitle;
    noteBodyElement.innerText = notecard.noteBody;
  }

  function submitNote() {
    console.log("This is where we will grab input and then update the notecard.");
  
    const editorTitleElement = document.querySelector('#note-editor-title');
    const editorBodyElement = document.querySelector('#note-editor-body');
    
    notecard.noteTitle = editorTitleElement.value;
    notecard.noteBody = editorBodyElement.value;

    updateElement();
  }

const btnSubmit = document.querySelector('.icon-done');
btnSubmit.onclick = submitNote