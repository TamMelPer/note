"use strict";

function NCinstantiatesWithANoteListModel() {
    var noteController = new NoteController();
    assert.isTrue(noteController.noteListModel instanceof NoteList);
  };
  
  NCinstantiatesWithANoteListModel();
  console.log("Test: NCinstantiatesWithANoteListModel")


// function InsertsHTLMIntoAppElement() {
//     var noteController = new NoteController();
// }