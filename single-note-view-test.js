"use strict";


let noteModelDouble = new Note("this is a double to test SingleNoteView")
let singleNoteView = new SingleNoteView();
let singleNoteViewDouble = new SingleNoteView(noteModelDouble);

function SingleNoteViewInstantiateswithNoteModel() {
    assert.isTrue(singleNoteView.noteModel instanceof Note);
  };
  
  SingleNoteViewInstantiateswithNoteModel();
  console.log("Test: SingleNoteViewInstantiateswithNoteModel")


  function SingleNoteViewReturnsHTML() {
    assert.isEqual(singleNoteViewDouble.noteHTML(), "<div>this is a double to test SingleNoteView</div>")
  };
  SingleNoteViewReturnsHTML();
  console.log("Test: SingleNoteViewReturnsHTML")